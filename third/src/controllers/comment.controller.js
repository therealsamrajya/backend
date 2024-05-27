import mongoose  from "mongoose"
import { asyncHandler } from "../utils/asynchandler"
import { ApiError } from "../utils/ApiError"
import { Comment } from "../models/comment.model"

const getVideoComments= asyncHandler(async(req,res)=>{
  const {videoId} = req.params
  const {page =1, limit = 10} = req.query

  if (!videoId) {
    throw new ApiError(404,"Please enter a valid video id")
  }

  const getComments = await Comment.aggregate([
    {
      $match:{
        video: new mongoose.Types.ObjectId(videoId),
      },
    },
    {
      $lookup:{
        from:"users",
        localField:"owner",
        foreignField:"_id",
        as:"owners",
      },
    },
    {
      $lookup:{
        from:"likes",
        localField:"_id",
        foreignField:"comment",
        as:"likes"
      },
    },
    {
      $addFields:{
        likesCount:{
          $size:"$likes",
        },
        owner:{
          $first:"$owners",
        },
        isLiked:{
          $cond:{
            if:{
              $in:[req.user?._id,"$likes.likedBy"],
            },
            then:true,
            else:false,
          },
        },
      },
    },
    {
      $sort:{
        createdAt:-1,
      },
    },
    {
      $project:{
        content:1,
        createdAt:1,
        likesCount:1,
        owner:{
          username:1,
          fullName:1,
          "avatar.url":1,
        },
        isLiked:1,
      },
    },
  ])  

  if(!getComments)
    {
      throw new ApiError(500,"Error while loading coments")
    }
})



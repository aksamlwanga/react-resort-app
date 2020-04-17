import React from 'react'
import { RoomFilter } from './RoomFilter'
import { RoomList } from './RoomList'
// import {RoomConsumer} from '../Context'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

const RoomContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>

    )



}
export default withRoomConsumer(RoomContainer)

// export const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const {loading,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading />
//                     }
//                   return(
//                    <div>
//                        hello from rooms containier 

//                       <RoomFilter rooms={rooms}/>
//                       <RoomList rooms={sortedRooms}  />
//                     </div>
//                   )  
//                 }
//             }
//         </RoomConsumer>

//     )
// }

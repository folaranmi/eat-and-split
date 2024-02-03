import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul className="">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

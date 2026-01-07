"use client";

import { useState, useTransition } from "react";
import { FollowUser, UnfollowUser } from "./actions";

interface Props {
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching || isPending;

    if (isFollowing) {
        return (
            <button onClick={() => startTransition(() => UnfollowUser({ targetUserId }))}>
                {!isMutating ? "Unfollow" : "..."}
            </button>
        );
    } else {
        return (
            <button onClick={() => startTransition(() => FollowUser({ targetUserId }))}>
                {!isMutating ? "Follow" : "..."}
            </button>
        );
    }
}

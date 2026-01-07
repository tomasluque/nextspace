"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

interface Props {
    targetUserId: string;
}

export async function FollowUser({ targetUserId }: Props) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;
    const currentUserId = await prisma.user
        .findUnique({ where: { email: currentUserEmail } })
        .then((user) => user?.id!);

    const record = await prisma.follows.create({
        data: {
            followerId: currentUserId,
            followingId: targetUserId,
        },
    });

    revalidatePath(`/users/${targetUserId}`);
}

export async function UnfollowUser({ targetUserId }: Props) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const currentUserId = await prisma.user
        .findUnique({ where: { email: currentUserEmail } })
        .then((user) => user?.id!);

    const record = await prisma.follows.delete({
        where: {
            followerId_followingId: {
                followerId: currentUserId,
                followingId: targetUserId!,
            },
        },
    });

    revalidatePath(`/users/${targetUserId}`);
}

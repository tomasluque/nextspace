import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import FollowButton from "@/components/FollowButton/FollowButton";

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    params = await params;
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
    params = await params;
    const user = await prisma.user.findUnique({
        where: { id: params.id },
        include: { following: true, followedBy: true },
    });

    const { name, bio, image, id, following, followedBy } = user ?? {};

    return (
        <div>
            <h1>{name}</h1>
            <img width={300} src={image ?? "/mememan.webp"} alt={`${name}'s profile`} />
            <h3>Bio</h3>
            <p>{bio ?? "..."}</p>

            <h3>Friends</h3>
            <p>Following: {following?.length}</p>
            <p>Followers: {followedBy?.length}</p>

            <FollowButton targetUserId={params.id} />
        </div>
    );
}

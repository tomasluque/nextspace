import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/buttons";
import { updateUser } from "./actions";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin");
    }

    const currentUserEmail = session?.user?.email!;
    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    });

    return (
        <>
            <h1>Dashboard</h1>
            <SignOutButton />
            <div>
                <h2>Edit Your Profile</h2>
                <form action={updateUser}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={user?.name ?? ""} />
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" cols={30} rows={10} defaultValue={user?.bio ?? ""}></textarea>
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" defaultValue={user?.age ?? 0} />
                    <label htmlFor="image">Profile Image URL</label>
                    <input type="text" name="image" defaultValue={user?.image ?? ""} />

                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
}

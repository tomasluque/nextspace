"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export async function updateUser(formData: FormData) {
    const data = {
        name: formData.get("name"),
        bio: formData.get("bio"),
        age: Number(formData.get("age")),
        image: formData.get("image"),
    };

    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        // @ts-ignore - not sure why the linter is going wild here.
        data,
    });

    revalidatePath(`/dashboard`);
}

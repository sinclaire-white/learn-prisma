import { prisma } from "./lib/prisma";


async function run(){
    // const createUser = await prisma.user.create({
    //     data:{
    //         name: "John Doe",
    //         email: "johndoe2@prosma.com"
    //     }
    // })
    // console.log("Created user:", createUser)

    // const createPost = await prisma.post.create({
    //     data:{
    //         title: "My first post",
    //         content: "This is the content of my first post",
    //         authorId: 2
    //     }
    // })

    // console.log("Created post:", createPost)   

    // const createProfiel = await prisma.profile.create({
    //     data:{
    //         bio: "This is my bio",
    //         userId: 2
    //     }
    // })
    // console.log("Created profile:", createProfiel)

    // const allUsers = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profile: true
    //     // }

    //     select:{
    //         id: true,
    //         name: true,
    //         posts: true,  
    //         profile: true
    //     }
    // })
    // console.dir(allUsers, {depth: Infinity})


}

run()
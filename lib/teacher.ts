export const isTeacher = (userId?:string | null) => {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID
}

// THIS I CREATE FOR IF WE WANT ONLY SELECT USER CAN ACCESS THE TEACHER MODE 
// There is  also need to be  change in some place and protect route if you want to like that
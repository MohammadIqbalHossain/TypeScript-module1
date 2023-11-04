{
    // 

    // Constrains: Think about a situtation where we're setting user type in function calling means we've using generic type for this. 

    // Oaky, let's write the fucntion.


    // Enforcing or constraiting the function here with extends
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "Next Level Web Development.";

        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent<{ id: number; name: string; email: string; hasWatch: boolean }>({ id: 234, name: "iqbal", email: "iqbal@gmail.com", hasWatch: false });

    const student2 = addCourseToStudent<{ id: number; name: string; email: string; hasWatch: boolean }>({ id: 234, name: "Mr. X", email: "x@gmail.com", hasWatch: false });

    // Here every student has some properties common. and we've a requirement that if someone has to be student, the object must have properties like id, name and email. so we've to enforce them, so that this student give us an erro.

    // const student3 = addCourseToStudent<{ emni: string }>({ emni: 'amni' }); //It'll give us error.




    // 
}
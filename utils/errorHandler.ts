//THROWS NEW ERROR AND LOGS ERROR TO CONSOLE

type Error = {
    message: string,
}

export const throwError = (error: Error) => {
    console.error(error.message);
    throw new Error(error.message)
}
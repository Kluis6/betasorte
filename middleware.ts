

    export function middleware (request:any){
        console.log("middleware")
        return null

    }

    export const config = {
        matcher: "/:path"
       
    }
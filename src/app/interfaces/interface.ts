export interface BranchDetail{
    id: string,
    branch_name: string,
    branch_code: string,
    branch_address: string, 
    password: string,
    contact_details:{
        mobile: string,
        email: string
    },
    financial:[
        {
            profit: number,
            month:string
        }
    ],
    service_center_details:{
        email: string,
        mobile:string,
        owner_name:string,
        owner_address:string
    }

}
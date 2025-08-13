import Nav from "@/app/admin/components/Nav";

export default function AdminLayout({children}){
    return(
        <div>
            <hr className="mb-2 mt-2" />
            <Nav />
            {children}
        </div>
    )
}
import { NextResponse } from "next/server"
import { insertListing, getListings, getListing, updateListing, deleteListing, insertAnnonce } from "@/lib/db"

export async function POST(req: Request) {
	try {
	  const body = await req.json()
	  console.log("API received body:", body)
  
	  // Validate required fields
	 
  
	  try {
		const result = await insertAnnonce(body)
		console.log("Database insert result:", result)
  
		return NextResponse.json(
		  {
			message: "Annonce created successfully",
			result,
		  },
		  { status: 201 },
		)
	  } catch (dbError: any) {
		console.error("Database error:", {
		  message: dbError.message,
		  code: dbError.code,
		  sqlMessage: dbError.sqlMessage,
		})
  
		return NextResponse.json(
		  {
			error: "Database error",
			details: dbError.message,
		  },
		  { status: 500 },
		)
	  }
	} catch (error: any) {
	  console.error("API error:", error)
	  return NextResponse.json(
		{
		  error: "Error creating annonce",
		  details: error.message,
		},
		{ status: 500 },
	  )
	}
  }

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (id) {
      const listing = await getListing(Number(id))
      return NextResponse.json(listing)
    }

    const listings = await getListings()
    return NextResponse.json(listings)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error fetching listings" }, { status: 500 })
  }
}
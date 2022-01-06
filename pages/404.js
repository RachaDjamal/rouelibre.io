import React from "react"
import Link from "next/link"

export default function Custom404() {

    const text = "Oops, il semble que cette page n'existe pas"

    return (
        <>
            <div className="erreur">
                <h1>🤯</h1>
                <h2>{text}</h2>
                <Link href="/"><a  className="">Revenir à la homepage</a></Link>
            </div>
        </>
        )
  }
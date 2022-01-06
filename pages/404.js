import React from "react"
import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <div className="erreur">
                <h1>🤯</h1>
                <h2>Oops, il semble que cette page n'existe pas</h2>
                <Link href="/"><a  className="">Revenir à la homepage</a></Link>
            </div>
        </>
        )
  }
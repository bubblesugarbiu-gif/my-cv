'use client'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Config } from '@/config/config'

export default function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        age: "",
        job: "",
        status: ""
    })

    useEffect(() => {
        setPersonalInfo(Config.personalInfo)
    }, [])

    return (
        <div className="mb-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h1>
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1.5" />
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1.5" />
                            <span>{personalInfo.email}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1.5" />
                            <span>{personalInfo.address}</span>
                        </div>
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-1.5" />
                            <span>{personalInfo.age}</span>
                        </div>
                    </div>
                    <div className="text-base mt-2">{personalInfo.job} | {personalInfo.status}</div>
                </div>
            </div>
        </div>
    )
}

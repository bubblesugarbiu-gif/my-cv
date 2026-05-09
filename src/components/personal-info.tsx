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
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{personalInfo.name}</h1>
            
            <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center justify-center gap-5">
                    <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1.5" />
                        {personalInfo.phone}
                    </div>
                    <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-1.5" />
                        {personalInfo.email}
                    </div>
                </div>
                
                <div className="flex items-center justify-center gap-5">
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {personalInfo.address}
                    </div>
                    <div className="flex items-center">
                        <User className="w-4 h-4 mr-1.5" />
                        {personalInfo.age}
                    </div>
                </div>
                
                <div className="pt-1 text-base">
                    {personalInfo.job} | {personalInfo.status}
                </div>
            </div>
        </div>
    )
}

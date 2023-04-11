import React, { useState, useEffect } from 'react';
import { Mentor } from './mentors';
import '../css/mentorlist.css'

type MentorListItems = {
    filters: string[];
    minExp: number;
    maxExp: number;
};

const MentorList: React.FC<MentorListItems> = ({ filters, minExp, maxExp }) => {
    const [mentors, setMentors] = useState<Mentor[]>([]);

    useEffect(() => {
        // Load mentors from a text file
        const fetchMentors = async () => {
            const response = await fetch('/mentors.txt');
            const data = await response.text();
            const mentors = data.split('\n').map((line) => {
                const [name, yearsOfExperience, department] = line.split(',');
                return { name, yearsOfExperience: Number(yearsOfExperience), department };
            });
            setMentors(mentors);
        };
        fetchMentors();
    }, []);

    const filteredMentors = mentors.filter((mentor) =>
        filters.every((filter) => mentor.department.trim() === filter.trim()) 
        &&mentor.yearsOfExperience >= minExp 
        && mentor.yearsOfExperience <= maxExp
    );

    return (
        <div className='MentorList'>
            <h2>AVAILABLE MENTORS</h2>
            {filteredMentors.map((mentor) => (
                <div key={mentor.name} className='Mentor'>
                    <div className='info'>
                        <span><strong>{mentor.name}</strong> | </span>
                        <span>{mentor.yearsOfExperience} years of experience | </span>
                        <span>{mentor.department}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MentorList;

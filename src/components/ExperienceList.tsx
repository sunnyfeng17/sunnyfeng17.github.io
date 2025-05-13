import React from 'react';
import ExperienceRow from '../components/ExperienceRow';
import XeroLogo from '../images/company-logos/xero.png';
import UoALogo from '../images/company-logos/uoa.png';
import GradPlushiesLogo from '../images/company-logos/gradplushies.png';
import SSSLogo from '../images/company-logos/sss.png';
import GilmoursLogo from '../images/company-logos/gilmours.png';

const experienceData = [
    {
        image: XeroLogo,
        position: 'Engineer - Mobile (iOS) | Associate Engineer | Graduate Engineer',
        date: 'Nov 2022 - Apr 2025 | Feb 2022 - Nov 2022 | Feb 2021 - Feb 2022',
        company: 'Xero',
        desc: (
            <>
                <p>I started at Xero as a Graduate Engineer, rotating through four different teams - I was able to gain experience in frontend, backend, and mobile development. After one year, I ungraduated into the Xero Me Mobile (XMM) as an iOS Engineer, where I spent the rest of my time at Xero.</p>
            </>
        ),
        techskills: ['Swift', 'SwiftUI', 'Swift Testing', 'XCTest', 'Cucumber', 'React', 'HTML', 'CSS', 'Git', 'C#', 'Launch Darkly', 'TeamCity', 'Bitrise', 'Sumo Logic', 'New Relic', 'Mix Panel', 'XCode', 'Browser Stack'],
        softskills: ['Communication', 'Teamwork', 'Agile', 'Mentoring', 'Documentation']
    },
    {
        image: GradPlushiesLogo,
        position: 'Co-Founder',
        date: 'Jul 2020 - Apr 2025',
        company: 'Graduation Plushies',
        desc: (
            <>
                <p>I co-founded graduation plushies in my final year of university - a service selling customised graduation hats for plushies, as well as ready-made graduation plushies and personalised hampers!</p>
            </>
        ),
        techskills: [],
        softskills: ['Social Media', 'Marketing', 'Market Research', 'Communication']
    },
    {
        image: SSSLogo,
        position: 'Co-Founder',
        date: 'Feb 2016 - Apr 2025',
        company: 'School Storage Solutions',
        desc: (
            <>
                <p>I co-founded School Storage Solutions during my final year of highschool under the Young Enterprise Scheme. We designed and built lockers with a small business. These lockers are still being rented to students at Sancta Maria College.</p>
            </>
        ),
        techskills: ['Design', 'HTML', 'CSS', 'Social Media', 'Marketing'],
        softskills: []
    },
    {
        image: UoALogo,
        position: 'Research Assistant',
        date: 'Nov 2020 - Jan 2021',
        company: 'The University of Auckland',
        desc: 'Research assistant for Danielle Lottridge. Designed and built a website for HCI @ University of Auckland using Wordpress, and some custom HTML / CSS',
        techskills: ['Design', 'HTML', 'CSS', 'Wordpress'],
        softskills: ['Communication']
    },
    {
        image: UoALogo,
        position: 'Teaching Assistant',
        date: 'Mar 2019 - Jul 2020',
        company: 'The University of Auckland',
        desc: 'Marker for COMPSCI 101 and COMPSCI 110',
        techskills: [],
        softskills: []
    },
    {
        image: GilmoursLogo,
        position: 'Customer Service Assistant',
        date: 'Feb 2017 - Mar 2019',
        company: 'Gilmours Manukau',
        desc: 'I worked as a customer service assistant, mainly checkout / cashier - performed transactions, such as refunds, exchanges and sales of age restricted items.',
        techskills: [],
        softskills: ['Customer Service', 'Communication']
    },
    {
        image: GilmoursLogo,
        position: 'Customer Service Assistant',
        date: 'Nov 2014 - Nov 2016',
        company: 'Gilmours Panmure',
        desc: 'I worked as a customer service assistant, mainly checkout / cashier - performed transactions, such as refunds, exchanges and sales of age restricted items. Assisted with customer queries over the phone, stock taking and filing.',
        techskills: [],
        softskills: ['Customer Service', 'Communication']
    }
];

const ExperienceList = () => (
    <div>
        {experienceData.map((experience, index) => (
            <ExperienceRow
                key={index}
                image={experience.image}
                position={experience.position}
                date={experience.date}
                company={experience.company}
                desc={experience.desc}
                techskills={experience.techskills}
                softskills={experience.softskills}
            />
        ))}
    </div>
);

export default ExperienceList;
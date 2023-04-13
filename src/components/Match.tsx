import React, { useState } from 'react';
import MentorList from './MentorList';
import '../css/match.css'

const Match: React.FC = () => {
    const [filters, setFilters] = useState<string[]>([]);
    const [minExp, setMinExp] = useState<number>(0);
    const [maxExp, setMaxExp] = useState<number>(50);
    const [location, setLocation] = useState<string[]>([]);

    //function to update filters
    const updateFilters = (newFilters: string[]) => {
        setFilters(newFilters);
    };

    const updateLocationFilter = (newLocation: string[]) => {
        setLocation(newLocation);
    }

    return (
        <div className="matches-containter">
            <div className="filters-container">
                <h2>FILTERS</h2>
                <label className="filters-label">
                    <hr className='header-line' />
                    <strong>DEPARTMENT:</strong>
                    <br />
                    <input
                        type='checkbox'
                        className='filters-checkbox'
                        value='Technical Operations'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    Technical Operations
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Software Development'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Software Development
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Business Analysis'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Business Analysis
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Business Intelligence'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Business Intelligence
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Project Management'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Project Management
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Salesforce Analyst'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Salesforce Analyst
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Salesforce Developer'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Salesforce Developer
                </label>
                <label className='filters-label'>
                    <input
                        type='checkbox'
                        value='Data Engineering'
                        onChange={(e) =>
                            updateFilters(
                                e.target.checked
                                    ? [...filters, e.target.value]

                                    : filters.filter((filter) => filter !== e.target.value)
                            )
                        }
                    />
                    &nbsp; Data Engineering
                </label>
                <label className="filters-label">
                    <strong>LOCATION:</strong>
                    <br />
                    <input
                        type='checkbox'
                        value='London'
                        onChange={(e) =>
                            updateLocationFilter(
                                e.target.checked
                                    ? [...location, e.target.value]
                                    : location.filter((location) => location !== e.target.value)
                            )
                        }
                    />
                    &nbsp; London
                </label>
                <label className="filters-label">
                    <strong>YEARS OF EXPERIENCE:</strong>
                    <br />
                    <label>
                        Minimum:
                        <input
                            type="range"
                            min="0"
                            max="50"
                            value={minExp}
                            step="1"
                            onChange={(e) => setMinExp(Number(e.target.value))}
                        />
                        {minExp}
                    </label>
                    <br />
                    <label>
                        Maximum:
                        <input
                            type="range"
                            min="0"
                            max="50"
                            value={maxExp}
                            step="1"
                            onChange={(e) => setMaxExp(Number(e.target.value))}
                        />
                        {maxExp}
                    </label>

                </label>

            </div>
            <div className='mentors-container'>
                <MentorList filters={filters} minExp={minExp} maxExp={maxExp} location={location}/>
            </div>
        </div>
    );
};

export default Match;

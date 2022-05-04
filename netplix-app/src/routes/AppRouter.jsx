import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../components/dashboard/Dashboard';

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Routes path="/" element= {<Dashboard />}/>
            </Routes>
            <Routes>
                <Routes path="/auth" element= {<Dashboard />}/>
            </Routes>
        </div>
    );
};

import { Box } from '@mui/material';

function Data({data}) {
    return (
        <>
            < h1 >
                داده‌ها از API:
            </h1>
            <div className='table__data'>

                <Box className="table__row">
                    <div className="table__cell">نام </div>
                    <div className="table__cell">نام کاربری </div>
                    <div className="table__cell">ایمیل </div>
                </Box>

                {data && data.map((item) => (
                    <Box className="table__row" key={item.id}>
                        <div className="table__cell">{item.name} </div>
                        <div className="table__cell">{item.username} </div>
                        <div className="table__cell">{item.email} </div>
                    </Box>
                ))}
            </div>

        </>
    )
}

export default Data
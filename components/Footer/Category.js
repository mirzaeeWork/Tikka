import { Link } from '@mui/material';

function Category() {
    return (
        <>
            <h2>دسته بندی ها</h2>
            <ul className="links">
                <li>
                    <Link href="#" >
                        مکالمه
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        آیلتس
                    </Link>

                </li>
                <li>
                    <Link href="#">
                        عربی خلیجی
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        کلاس خصوصی
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        مکالمه ترکی استانبولی
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        تعیین سطح
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        تافل
                    </Link>
                </li>
                <li >
                    <Link href="#" >
                        بیشتر ...
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Category
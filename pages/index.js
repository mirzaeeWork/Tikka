// pages/index.js
import Category from '../components/Footer/Category';
import Socials from '../components/Footer/Socials';
import Symbols from '../components/Footer/Symbols';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../components/Redux/slices/apiSlice';
import { wrapper } from '../components/Redux/store';
import Data from '../components/Data/Data';

const Home = ({ data, loading, error }) => {
    if (loading) {
        return <p>در حال بارگذاری...</p>;
    }

    if (error) {
        return <h2>خطا: {error}</h2>;
    }

    return (
        <main>
            <section className='page-content'>
                <Data data={data} />
            </section>
            <footer className='footer'>
                <Category />
                <Symbols />
                <hr className='hr' />
                <Socials />
            </footer>
        </main>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
     store.dispatch(fetchDataRequest());
    // منتظر می‌مانیم تا API در SAGA پاسخ دهد
    await new Promise((resolve) => setTimeout(resolve, 1000)); // تاخیر برای اطمینان از تکمیل درخواست

    const state = store.getState();
    const data = state.api.data || null; // داده‌ها یا null
    const error = state.api.error || null; // اگر خطایی وجود دارد

    return {
        props: {
            data, // داده‌ها یا null
            loading: !data && !error, // وضعیت بارگذاری
            error, // خطا یا null
        },
    };
});
export default Home;
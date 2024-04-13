import './Table.css';
import React, { useState, useEffect } from 'react';

import downArrow from './../../assets/down-chevron-svgrepo-com.svg';

import { useAppSelector } from '../../app/hooks';

import { salesStructure } from '../../models/products.interfaces';

import formatDate from '../../utils/formateDate';
import formatPrice from '../../utils/formatPrice';
import formatUnits from '../../utils/formatUnits';

export default function Table() {
    const { currentProduct } = useAppSelector((state) => state.product);

    const [sortedData, setSortedData] = useState(currentProduct?.sales ?? []);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [sortBy, setSortBy] = useState<string | null>(null);

    useEffect(() => {
        setSortedData(currentProduct?.sales ?? []);
    }, [currentProduct?.sales])

    const handleSort = (columnName: keyof salesStructure) => {
        const newSortedData = [...sortedData];
    
        if (sortBy === columnName) {
            newSortedData.reverse();
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            newSortedData.sort((a, b) => {
                const aValue = Number(a[columnName]);
                const bValue = Number(b[columnName]);
    
                if (sortDirection === 'asc') {
                    return aValue - bValue;
                } else {
                    return bValue - aValue;
                }
            });
            setSortDirection('asc');
            setSortBy(columnName);
        }
    
        setSortedData(newSortedData);
    };

    return (
        <div id='table'>
            <table id='table-table'>
                <tr className='table-row'>
                    <th 
                        className='table-cell date-cell title-cell' 
                        onClick={() => handleSort('weekEnding')}>
                        WEEK ENDING <img style={{ transform: sortDirection === 'asc' && sortBy === 'weekEnding' ? 'rotate(180deg)' : 'rotate(0deg)' }} className='title-arrow' src={downArrow} alt='ascend and descend arrow' />
                    </th>
                    <th 
                        className='table-cell title-cell' 
                        onClick={() => handleSort('retailSales')}>
                        RETAIL SALES <img style={{ transform: sortDirection === 'asc' && sortBy === 'retailSales' ? 'rotate(180deg)' : 'rotate(0deg)' }} className='title-arrow' src={downArrow} alt='ascend and descend arrow' />
                    </th>
                    <th 
                        className='table-cell title-cell' 
                        onClick={() => handleSort('wholesaleSales')}>
                        WHOLESALE SALES <img style={{ transform: sortDirection === 'asc' && sortBy === 'wholesaleSales' ? 'rotate(180deg)' : 'rotate(0deg)' }} className='title-arrow' src={downArrow} alt='ascend and descend arrow' />
                    </th>
                    <th 
                        className='table-cell title-cell' 
                        onClick={() => handleSort('unitsSold')}>
                        UNITS SOLD <img style={{ transform: sortDirection === 'asc' && sortBy === 'unitsSold' ? 'rotate(180deg)' : 'rotate(0deg)' }} className='title-arrow' src={downArrow} alt='ascend and descend arrow' />
                    </th>
                    <th 
                        className='table-cell title-cell' 
                        onClick={() => handleSort('retailerMargin')}>
                        RETAILER MARGIN <img style={{ transform: sortDirection === 'asc' && sortBy === 'retailerMargin' ? 'rotate(180deg)' : 'rotate(0deg)' }} className='title-arrow' src={downArrow} alt='ascend and descend arrow' />
                    </th>
                </tr>
                {sortedData?.map((item) => (
                    <tr className='table-row'>
                        <th className='table-cell date-cell'>{formatDate(item?.weekEnding)}</th>
                        <th className='table-cell'>{formatPrice(item?.retailSales)}</th>
                        <th className='table-cell'>{formatPrice(item?.wholesaleSales)}</th>
                        <th className='table-cell'>{formatUnits(item?.unitsSold)}</th>
                        <th className='table-cell'>{formatPrice(item?.retailerMargin)}</th>
                    </tr>
                ))}
            </table>
        </div>
    )
}
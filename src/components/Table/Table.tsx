import './Table.css'; // CSS
import React, { useState, useEffect } from 'react';

// Arrow SVG for table titles
import downArrow from './../../assets/down-chevron-svgrepo-com.svg';


// Redux
import { useAppSelector } from '../../app/hooks';

// Interface
import { salesStructure } from '../../models/products.interfaces';

// Formatters
import formatDate from '../../utils/formateDate';
import formatPrice from '../../utils/formatPrice';
import formatUnits from '../../utils/formatUnits';

// Component to render table
export default function Table() {
    // Redux selector
    const { currentProduct } = useAppSelector((state) => state.product);

    const [sortedData, setSortedData] = useState(currentProduct?.sales ?? []); // Sorted Sales data (default is unsorted)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc'); // Holds direction of how the data is sorted
    const [sortBy, setSortBy] = useState<string | null>(null); // Holds the column the data is being sorted by

    // Checks if the teh sales data changes
    useEffect(() => {
        setSortedData(currentProduct?.sales ?? []);
    }, [currentProduct?.sales])

    // Handles the sorting for both the column and the direction
    const handleSort = (columnName: keyof salesStructure) => {
        // Temp Array
        const newSortedData = [...sortedData];
    
        if (sortBy === columnName) {
            // Checks if a column is already selected and updates direction
            newSortedData.reverse();
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // If new column is not already selected sorts by the new column
            newSortedData.sort((a, b) => {
                // Gets the values to sort by
                const aValue = Number(a[columnName]);
                const bValue = Number(b[columnName]);
    
                // Checks and sort by direction
                if (sortDirection === 'asc') {
                    return aValue - bValue;
                } else {
                    return bValue - aValue;
                }
            });
            // Sets direction and column
            setSortDirection('asc');
            setSortBy(columnName);
        }
    
        setSortedData(newSortedData);
    };

    // The table with the titles and maps through the rest of the rows.
    // Formats the data for rows
    // Changes the direction of the sort
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
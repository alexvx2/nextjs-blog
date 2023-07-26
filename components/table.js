/**
 * component that creates a table with 2 columns fetches the data from external_custom_data
 */

import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

export default function Table({ rowdata }) {
    let rows =  rowdata.map(element => {
        return <Row data={element} />
    });

    return (

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>

    )
}

function Row( {data}) {
    return (
        <tr className={utilStyles.listItem} key={data.id}>
            <td className={utilStyles.lightText}><Date dateString={data.date} /></td>
            <td>  <Link href={`/posts/${data.id}`}>{data.title}</Link>
        </td></tr>
    )
}
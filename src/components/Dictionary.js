import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import '../stylesheets/dictionary.css';
import { useState, useEffect } from 'react';
import initSqlJs from "sql.js";
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));


/*
function Load() {
    return json ? (
        <ul id='ul-words'>{(json['words']).map((element, index) => {
            return <li key={index}><span id='folksprak-word'>{element.word}</span> [<span id='folksprak-attribute'>{element.attribute}</span>] — {element.translations.join(', ')}</li>
        })}</ul>
    ) : (
        <p>Data loading failed.</p>
    )
}
*/

/*
export default function Dictionary() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch('/api/all')
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const useData = data.map((item, index) => {
        console.log(item.Name);
        return <li key={index}><span id='folksprak-word'>{item.Name}</span> [<span id='folksprak-attribute'>{item.Name}</span>]</li>
    });

    console.log(data);
    return (
        <><Box sx={{ flexGrow: 1 }} mt={2}>
            <Grid container justifyContent='center' spacing={4} mb={1}>
                <Grid item xs={11} md={10} lg={8}>
                    <Item elevation={0} align='left'>
                        <ul id='ul-words'>
                            {loading ? <div>Data is loading...</div> : (error ? <div>Error occured.</div> : useData)}
                        </ul>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
*/

export default function Dictionary() {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);

    useEffect(async () => {
        const sqliteDbResp = await fetch('Chinook_Sqlite.sqlite');
        if (!sqliteDbResp.ok) {
            throw new Error(`Failed to fetch ...`);
        }
        const sqliteDb = new Uint8Array(await sqliteDbResp.arrayBuffer());
        console.log(`sqliteDb.length = ${sqliteDb.length}`);
        try {
            const SQL = await initSqlJs({ locateFile: () => sqlWasm });
            setDb(new SQL.Database(sqliteDb));
        } catch (err) {
            setError(err);
        }
    }, []);

    return (
        <><Box sx={{ flexGrow: 1 }} mt={2}>
            <Grid container justifyContent='center' spacing={4} mb={1}>
                <Grid item xs={11} md={11} lg={11}>
                    <Item elevation={1} align='center'>
                        {error ? (<pre>{error.toString()}</pre>) : (!db ? (<pre>Loading...</pre>) : <SQLRepl db={db} />)}
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </>
    );


}


function SQLRepl({ db }) {
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    function exec(sql) {
        try {
            // The sql is executed synchronously on the UI thread.
            // You may want to use a web worker here instead
            const res = db.exec(sql);
            console.log(res);
            setResults(res); // an array of objects is returned
            setError(null);
        } catch (err) {
            // exec throws an error when the SQL statement is invalid
            setError(err);
            setResults([]);
        }
    }

    return (
        <div>
            <h1>React SQL interpreter</h1>

            <textarea
                onChange={(e) => exec(e.target.value)}
                placeholder="Enter some SQL. No inspiration ? Try “select sqlite_version()”"
            ></textarea>

            <pre className="error">{(error || "").toString()}</pre>

            <pre>
                {
                    // results contains one object per select statement in the query
                    results.map(({ columns, values }, i) => (
                        <ResultsTable key={i} columns={columns} values={values} />
                    ))
                }
            </pre>
        </div>
    );
}


function ResultsTable({ columns, values }) {
    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
    ];

    let cols = [];
    console.log("New columns = " + columns);
    for (let i = 0; i < columns.length; i++) {
        let column = new Object();
        column.field = 'col' + (i + 1);
        column.headerName = columns[i];
        column.width = 150;
        cols.push(column);
    }

    console.log(values);

    return (
        <><Box sx={{ flexGrow: 1 }} mt={2}>
            <Grid container justifyContent='center' spacing={4} mb={1}>
                <Grid item xs={11} md={10} lg={8}>
                    <Item elevation={1} align='center'>
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid rows={rows} columns={cols} />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}

{/* <table>
<thead>
    <tr>
        {columns.map((columnName, i) => (
            <td key={i}>{columnName}</td>
        ))}
    </tr>
</thead>

<tbody>
    {
        // values is an array of arrays representing the results of the query
        values.map((row, i) => (
            <tr key={i}>
                {row.map((value, i) => (
                    <td key={i}>{value}</td>
                ))}
            </tr>
        ))
    }
</tbody>
</table> */}
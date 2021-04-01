import React, { useState } from 'react';
import { Upload, Button, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/actions';

import './SearchBox.scss';

const SearchBox = () => {
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.app.loadingJson);
    const vendors = useSelector((state) => state.app.vendors);

    const handleUpload = () => {
        if (files.type !== 'application/json') {
            notification.error({
                message: 'please select a JSON file.',
            });
            return;
        } else {
            dispatch({ type: actionTypes.SET_LOADING });

            const fileReader = new FileReader();
            fileReader.readAsText(files, "UTF-8");
            fileReader.onload = e => {
                // console.log("e.target.result", JSON.parse(e.target.result));

                dispatch({
                    type: actionTypes.SET_JSON_DATA,
                    val: JSON.parse(e.target.result),
                });
            };
        }
    }

    const props = {
        onRemove: file => {
            setFiles([])
        },
        beforeUpload: file => {
            setFiles(file)
            return false;
        },
        files,
    };

    const renderTotal = () => {
        let sum = 0;
        if(vendors.length > 0) {
            vendors.forEach(vendor => {
                sum += vendor.value 
            });
        }
        return sum;
    }

    return (
        <div className="component SearchBox">

            {vendors.length > 0 && 
                <div className="title">Total Loaded: {renderTotal()}</div>
            }

            <div className="SearchBox__upload">
                <Upload {...props} accept=".json">
                    <Button icon={<UploadOutlined />}>Select JSON File</Button>
                </Upload>

                <Button
                    type="primary"
                    onClick={handleUpload}
                    disabled={files.length === 0}
                    loading={loading}
                    style={{ marginLeft: 10 }}
                >Upload</Button>
            </div>
        </div>
    )
};

export default SearchBox;
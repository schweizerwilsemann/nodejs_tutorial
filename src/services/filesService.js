const path = require('path');

const uploadSingleFile = async (fileObject) => {
    
    try {
            // Lấy tên file và phần mở rộng
        const fileName = path.basename(fileObject.name, path.extname(fileObject.name));
        const fileExt = path.extname(fileObject.name);

            // Tạo tên file mới với timestamp
        const newFileName = `${fileName}-${Date.now()}${fileExt}`;

            // Tạo đường dẫn lưu file mới
        let uploadPath = path.join(__dirname, '..', 'public', 'images', newFileName)
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: uploadPath, // Cập nhật đường dẫn thực tế 
            error: null
        };
    } catch (err) {
        console.log('>>> check error: ', err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        };
    }

}

const uploadMultipleFiles = async (filesArray) => {
    console.log(">>> check files array: ", filesArray);
    try {
        let uploadPath = path.resolve(__dirname, '../public/images');
        let resultArray = [];
        let countSuccess = 0;

        for(let i = 0; i < filesArray.length; ++i) {
            // Get image extension
            const fileExt = path.extname(filesArray[i].name);
            const fileName = path.basename(filesArray[i].name, fileExt);

            // Create filename with timestamp
            const newFileName = `${fileName}-${Date.now()}${fileExt}`;

            // Create new file directory
            let finalPath = `${uploadPath}/${newFileName}`;

            // Try to move the file
            try {
                await filesArray[i].mv(finalPath);
                resultArray.push({
                    status: 'success',
                    path: `/public/images/${newFileName}`,
                    fileName: filesArray[i].name,
                    error: null 
                });
                countSuccess++;
            } catch(err) {
                resultArray.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArray[i].name,
                    error: JSON.stringify(err) 
                });
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArray
        };
    } catch (err) {
        console.log('>>> check error: ', err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        };
    }
};


module.exports = {
    uploadSingleFile, uploadMultipleFiles
}
exports.printError = function(err) {
    if (typeof err === 'undefined') {
        err = '';
    } else if (typeof err === 'number') {
        if (!isNaN(err)) {
            if (typeof cv !== 'undefined') {
                err = 'Exception: ' + cv.exceptionFromPtr(err).msg;
            }
        }
    } else if (typeof err === 'string') {
        let ptr = Number(err.split(' ')[0]);
        if (!isNaN(ptr)) {
            if (typeof cv !== 'undefined') {
                err = 'Exception: ' + cv.exceptionFromPtr(ptr).msg;
            }
        }
    }

    console.log(err);
}

exports.printMat = function (mat) {
    console.log({step: mat.step, elemSize: mat.elemSize(), matSize: mat.matSize, sizes: mat.size(), empty: mat.empty(), depth: mat.depth(), dims: mat.dims, channels: mat.channels(), type: mat.type(), cols: mat.cols, rows: mat.rows});
}

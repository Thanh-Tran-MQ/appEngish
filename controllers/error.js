const error = (req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err)
}
const err = () => {
    const error = app.get('env') === 'development' ? err :{};
    const status = err.status || 500;

    return res.status(status).json({
        error: {
            message : error.message
        }
    })
}

module.exports = { 
    error,
    err
}
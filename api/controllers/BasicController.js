const BasicController = () => {
    const hello = async (req, res) =>
        res.status(200).json({ hello: 'Siema beju' });
    return {
        hello,
    };
};

module.exports = BasicController;

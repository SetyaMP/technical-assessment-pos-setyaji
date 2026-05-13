const reportService = require('../services/reportService');

const dailyRevenue = async (req, res) => {

    try {

        const data = await reportService.getDailyRevenue();

        res.json({
            success: true,
            message: 'Daily revenue report',
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    dailyRevenue
};
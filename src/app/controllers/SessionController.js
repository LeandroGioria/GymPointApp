class SessionController {
    async store(req, res) {
        return res.json({ status: 'ok' });
    }
}

export default new SessionController();

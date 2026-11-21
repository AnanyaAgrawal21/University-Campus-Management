
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "User authentication required"
      });
    }

    const userRole = req.user.role.toLowerCase();

    const permittedRoles = allowedRoles.map(role =>
      role.toLowerCase()
    );

    if (!permittedRoles.includes(userRole)) {
      return res.status(403).json({
        message: "You are not authorized to access this route"
      });
    }

    next();
  };
};

module.exports = { authorizeRoles };

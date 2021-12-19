module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53c14dc06d948e5b1e0eb83212c0db1f'),
  },
});

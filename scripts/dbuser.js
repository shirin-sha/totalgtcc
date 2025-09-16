db.users.updateOne(
  { email: "admin@example.com" },
  {
    $set: {
      email: "admin@example.com",
      role: "admin",
      password: {
        iterations: 120000,
        keylen: 64,
        digest: "sha512",
        salt: "1234567890",
        hash: "1234567890"
      },
      updatedAt: new Date()
    },
    $setOnInsert: { createdAt: new Date() }
  },
  { upsert: true }
)
const jwt = require("jsonwebtoken");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("/path/to/file");

describe("verifyToken", () => {
  let req, res, next;

  beforeEach(() => {
    req = { headers: { token: "Bearer abcdefghijklmnopqrstuvwxyz" } };
    res = {
      status: jest.fn(() => ({
        json: jest.fn(),
      })),
    };
    next = jest.fn();
  });

  it("should return a 401 status code if no auth header is present", () => {
    req.headers.token = null;
    verifyToken(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.status().json).toHaveBeenCalledWith("You are not authenticated!");
  });
  it("should call jwt.verify if auth header is present", () => {
    const verifySpy = jest.spyOn(jwt, "verify");
    verifyToken(req, res, next);
    expect(verifySpy).toHaveBeenCalledWith("abcdefghijklmnopqrstuvwxyz", process.env.JWT_SECRET, expect.any(Function));
  });

  it("should return a 403 status code if jwt.verify returns an error", () => {
    jwt.verify.mockImplementationOnce((_, __, cb) => cb(new Error("Token is not valid!")));
    verifyToken(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.status().json).toHaveBeenCalledWith("Token is not valid!");
  });

  it("should call next if jwt.verify does not return an error", () => {
    jwt.verify.mockImplementationOnce((_, __, cb) => cb(null, { id: 1 }));
    verifyToken(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

describe("verifyTokenAndAuthorization", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      headers: { token: "Bearer abcdefghijklmnopqrstuvwxyz" },
      user: { id: 1 },
      params: { id: 1 },
    };
    res = {
      status: jest.fn(() => ({
        json: jest.fn(),
      })),
    };
    next = jest.fn();
    verifyToken = jest.fn((_, __, cb) => cb());
  });

  it("should call verifyToken", () => {
    verifyTokenAndAuthorization(req, res, next);
    expect(verifyToken).toHaveBeenCalledWith(req, res, expect.any(Function));
  });

  




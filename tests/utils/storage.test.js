import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../../js/utils/storage.js";

// Simple mock for localStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}

beforeEach(() => {
  global.localStorage = new LocalStorageMock();
  clearStorage();
});

describe("getUsername", () => {
  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Vold", email: "test@example.com" });
    expect(getUsername()).toBe("Vold");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});

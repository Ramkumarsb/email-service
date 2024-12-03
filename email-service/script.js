// Mock email providers
class MockEmailProvider {
    constructor(name) {
        this.name = name;
        this.successRate = Math.random(); // Simulate provider reliability
    }

    async sendEmail(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < this.successRate) {
                    resolve({ provider: this.name, status: 'success' });
                } else {
                    reject({ provider: this.name, status: 'failed' });
                }
            }, 500); // Simulate network delay
        });
    }
}

// Instantiate providers
const provider1 = new MockEmailProvider('Provider1');
const provider2 = new MockEmailProvider('Provider2');

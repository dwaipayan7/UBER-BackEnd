const autocannon = require('autocannon');

const url = 'http://localhost:3000';

// Test default route
const instance1 = autocannon({
    url,
    connections: 10,
    pipelining: 1,
    duration: 30
}, (err, res) => {
    if (err) {
        console.error('Error testing default route:', err);
    } else {
        console.log('Default route results:', res);
    }
});

// Test stress-test route
const instance2 = autocannon({
    url: `${url}/stress-test`,
    connections: 10,
    pipelining: 1,
    duration: 30
}, (err, res) => {
    if (err) {
        console.error('Error testing stress-test route:', err);
    } else {
        console.log('Stress-test route results:', res);
    }
});

// Track both instances
autocannon.track(instance1, { renderProgressBar: true });
autocannon.track(instance2, { renderProgressBar: true });

// Print running message
process.stdout.write('Running stress tests...\n');
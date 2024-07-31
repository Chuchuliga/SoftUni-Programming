function softUniStudents(input) {
    const capacity = new Map();
    const students = new Map();
    
    for (const command of input) {
        
        if (command.includes(`:`)) {
            const [courseName, capacityCount] = command.split(`: `);
            let capacityCountNum = Number(capacityCount);
            
            if (!capacity.has(courseName)) {
                capacity.set(courseName, capacityCountNum);
                students.set(courseName, []);
            } else {
                capacity.set(courseName, capacity.get(courseName) + capacityCountNum);
            }

        } else if (command.includes(`with email`)) {
            const splitedCommand = command.split(` `);
            let usernameAndCredits = splitedCommand[0];
            let [username, credits] = usernameAndCredits.slice(0, -1).split(`[`);
            credits = Number(credits);
            const email = splitedCommand[3];
            const courseName = splitedCommand[5];

            if (students.has(courseName) && capacity.get(courseName) > 0) {
                students.get(courseName).push([credits, username, email]);
                capacity.set(courseName, capacity.get(courseName) - 1);
            }
        }
    }

    let array = [...students].sort((a, b) => b[1].length - a[1].length);

    for (const [courseName, studentsInfo] of array) {
        console.log(`${courseName}: ${capacity.get(courseName)} places left`);
        studentsInfo.sort((a, b) => b[0] - a[0]);
                  
        for (const [credits, username, email] of studentsInfo) {
            console.log(`--- ${credits}: ${username}, ${email}`);
        }
    }
}

softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])
// JSCore: 0 places left
// --- 105: user45, user45@user.com
// --- 85: user6, user6@user.com
// --- 50: user13, user13@user.com
// --- 29: user700, user700@user.com
// --- 25: user1, user1@user.com
// --- 20: user007, user007@user.com
// JavaBasics: 1 places left
// --- 3: user11, user11@user.com
// C#Advanced: 2 places left
// --- 18: user8, user8@user.com
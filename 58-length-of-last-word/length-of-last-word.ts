function lengthOfLastWord(s: string): number {

    const s2 = s.trim();
    const a = s2.split(" ");
    const last = a[a.length - 1];

    return last.length;  
};
class TimeLimitedCache {
     seen: Map<number, { value: number; timer: ReturnType<typeof setTimeout> }>;
    constructor() {
       
        this.seen = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {

        const exists = this.seen.has(key);

        if(exists) {
           const { timer } = this.seen.get(key);
           clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            this.seen.delete(key);
        }, duration);

        this.seen.set(key, {timer, value});

        return exists;
        
    }
    
    get(key: number): number {
        if(this.seen.has(key)) {
            return this.seen.get(key).value;
        }

        return -1;
    }
    
    count(): number {
        return this.seen.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
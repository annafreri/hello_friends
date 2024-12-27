export default function useTime(timezone: string) {

const currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
      });
return currentTime
}

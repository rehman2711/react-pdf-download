# Use Context

1. What problem does useContext solve ?

- Prop drilling
- Avoids deeply passing props

---

2. How does useContext work internally ?

- Uses React Context API
- Provider → supplies value
- Consumer (useContext) → subscribes to value
- Triggers re-render when value changes

---

3. When should you NOT use useContext ?

- Complex state handling (if we have to handle like-count, comment-count, post-count, etc.)
- Frequent updates → causes unnecessary re-renders

---

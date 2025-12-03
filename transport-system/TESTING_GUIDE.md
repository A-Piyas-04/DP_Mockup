# 🧪 TESTING GUIDE - IUT Transport System

## Quick Start
1. Ensure dev server is running: `npm run dev`
2. Open browser to `http://localhost:5173`
3. Use demo credentials from login page

---

## 🔐 Test Accounts

```
Officer:      officer@iut.edu
Driver:       driver@iut.edu
Student:      student@iut.edu
Guest:        guest@gmail.com
```
*(Password: any value)*

---

## ✅ Comprehensive Test Scenarios

### 🎯 Scenario 1: Complete User Booking Flow (5 min)
**Role:** Student/User

1. ✓ Login with `student@iut.edu`
2. ✓ View User Dashboard
3. ✓ Select a route from dropdown
4. ✓ Click "Check Availability"
5. ✓ Select a seat (click any available green seat)
6. ✓ Click "Book Token"
7. ✓ Select payment method (bKash or Card)
8. ✓ Click "Confirm Payment"
9. ✓ Wait for payment processing animation
10. ✓ View success screen with token ID
11. ✓ Click "Back to Dashboard"

**Expected Results:**
- Smooth navigation through all steps
- Visual feedback on seat selection
- Payment processing animation
- Success confirmation

---

### 🎯 Scenario 2: Officer Management Flow (5 min)
**Role:** Officer

1. ✓ Login with `officer@iut.edu`
2. ✓ View Officer Dashboard with KPIs
3. ✓ Click each KPI card:
   - Total Vehicles → Vehicles Page
   - Today's Trips → Routes Page
   - Available Seats → Booking Page
   - Pending Pay → Payment Page
4. ✓ Click Quick Actions:
   - Add Vehicle (shows toast)
   - Assign Driver → Drivers Page
   - View Trips → Routes Page
5. ✓ Click any trip card to view route details
6. ✓ Go to Vehicles page
7. ✓ Click floating + button (shows toast)
8. ✓ Click "Assign Driver" on a vehicle
9. ✓ Search for a vehicle
10. ✓ Click filter button

**Expected Results:**
- All KPI cards navigate correctly
- Toast notifications appear and dismiss
- Search works in real-time
- All buttons are interactive

---

### 🎯 Scenario 3: Driver Daily Operations (3 min)
**Role:** Driver

1. ✓ Login with `driver@iut.edu`
2. ✓ View assigned vehicle details
3. ✓ Check today's route and time
4. ✓ Click "Start Trip" → See toast → Navigate to route
5. ✓ Click "View Passenger List" → Navigate to subscriptions
6. ✓ Click "Report Incident" → Navigate to reports

**Expected Results:**
- Vehicle and route info displayed
- Start trip shows confirmation toast
- All navigation works properly

---

### 🎯 Scenario 4: Subscriber Journey (3 min)
**Role:** Subscriber

1. ✓ Login with subscriber account
2. ✓ View active subscription card
3. ✓ Check assigned seat and route
4. ✓ Click "Mark Absent" → See toast
5. ✓ Click "Book Extra" → Navigate to token booking
6. ✓ View weekly calendar

**Expected Results:**
- Subscription details visible
- Toast notification on absent marking
- Extra booking navigation works

---

### 🎯 Scenario 5: Settings & Navigation (3 min)
**Any Role**

1. ✓ Click bell icon → Notifications page
2. ✓ Click "Clear All" → See toast
3. ✓ Click back arrow
4. ✓ Click bottom nav "Profile"
5. ✓ Click "Personal Information" → See toast
6. ✓ Click "Change Password" → See toast
7. ✓ Toggle "Dark Mode" → See animation + toast
8. ✓ Click "Logout" → Return to login
9. ✓ Try all bottom navigation items

**Expected Results:**
- Smooth page transitions
- Toast notifications work
- Dark mode toggle animates smoothly
- Logout clears session

---

### 🎯 Scenario 6: Route & Schedule Browsing (3 min)
**Any Role**

1. ✓ Navigate to Routes page
2. ✓ View all available routes
3. ✓ Click any route card
4. ✓ View route details
5. ✓ Check schedule and stops
6. ✓ Click back button
7. ✓ Navigate between different pages using bottom nav

**Expected Results:**
- Route list displays correctly
- Route details show properly
- Back navigation works
- Bottom nav always accessible

---

## 🔍 Quick Functionality Checklist

### Dashboard Interactions
- [ ] All KPI cards clickable
- [ ] Quick actions functional
- [ ] Data displays correctly per role

### Navigation
- [ ] Top navigation (header)
- [ ] Bottom navigation (3 tabs)
- [ ] Back buttons work
- [ ] Page transitions smooth

### Forms & Inputs
- [ ] Route selection dropdown
- [ ] Search functionality
- [ ] Seat selection interactive
- [ ] Payment method selection

### Buttons
- [ ] Primary buttons (green)
- [ ] Outline buttons
- [ ] Icon buttons
- [ ] Floating action button
- [ ] Filter button

### Feedback
- [ ] Toast notifications appear
- [ ] Toasts auto-dismiss (3s)
- [ ] Success/Info/Error states
- [ ] Loading animations

### Visual Polish
- [ ] Hover effects
- [ ] Smooth animations
- [ ] Cursor changes on interactive elements
- [ ] Mobile-responsive layout

---

## 🐛 Known Limitations (By Design)

- ✓ All data is mock/static (no real backend)
- ✓ Filter button shows alert (placeholder)
- ✓ Some settings pages show "coming soon" toasts
- ✓ Search filters locally (no API calls)
- ✓ Payment processing is simulated (2 second delay)

---

## 📱 Device Testing

### Desktop Browser
- Chrome (recommended)
- Firefox
- Edge
- Safari

### Mobile Testing
- Open browser DevTools
- Toggle device toolbar (F12 → mobile icon)
- Test at 375px width (standard mobile)
- All interactions should work via touch/click

---

## 🎨 Visual Quality Checks

1. ✓ Professional color scheme (green theme)
2. ✓ Consistent spacing and padding
3. ✓ Clear typography hierarchy
4. ✓ Status badges properly colored
5. ✓ Icons aligned and sized correctly
6. ✓ Cards have proper shadows
7. ✓ Buttons have hover states

---

## ⚡ Performance Expectations

- Page transitions: Instant
- Toast animations: Smooth
- No console errors
- No broken images
- Fast load times (all mock data)

---

## 📊 Success Criteria

### For Stakeholders
✓ All major user flows are navigable
✓ UI feels professional and polished
✓ Buttons provide clear feedback
✓ Easy to understand role-specific dashboards

### For Developers
✓ Clean component structure
✓ Reusable Toast system
✓ Proper React Router integration
✓ Consistent theming
✓ No prop-type warnings

---

## 🎯 Demo Presentation Tips

1. **Start with login** - Show role-based dashboards
2. **Complete a booking** - Full user flow
3. **Show officer features** - Management capabilities
4. **Demonstrate interactivity** - Click everything!
5. **Highlight polish** - Toasts, animations, feedback

---

**Happy Testing! 🚀**

For issues or questions, check the FUNCTIONALITY.md file for detailed feature documentation.

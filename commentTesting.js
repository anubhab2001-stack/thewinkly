const SUPABASE_URL = 'https://dboedmhrbqvvnfpxghmu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRib2VkbWhyYnF2dm5mcHhnaG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MDIyMjYsImV4cCI6MjA5ODM3ODIyNn0.q8LQhxT1UQIfxqVHcQxsAo3AbQhbs_XY4lavzrQuvtI';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// const currentPostId = "blog-post-1"; 

// Fetch comments from SQL database
async function loadComments(currentPostId) {
    try {
        let { data: comments, error } = await supabaseClient
            .from('comments')
            .select('*')
            .eq('post_id', currentPostId)
            .order('created_at', { ascending: true });

        if (error) throw error;

        const container = document.getElementById('comments-container');
        container.innerHTML = '';
        
        // Added a check: only loop if comments actually exist
        if (comments && comments.length > 0) {
            comments.forEach(c => {
                container.innerHTML += `<p><strong>${c.username}:</strong> ${c.comment_text}</p>`;
            });
        } else {
            container.innerHTML = '<p style="color: gray;">No comments yet. Be the first!</p>';
        }
    } catch (err) {
        console.error("Error loading comments:", err.message);
    }
}

// Insert comment into SQL database
async function submitComment(currentPostId) {
    const usernameInput = document.getElementById('username').value.trim();
    const commentTextInput = document.getElementById('commentText').value.trim();

    if (!usernameInput || !commentTextInput) {
        alert("Please fill out both fields!");
        return;
    }

    try {
        const { data, error } = await supabaseClient
            .from('comments')
            .insert([{ 
                post_id: currentPostId, 
                username: usernameInput, 
                comment_text: commentTextInput 
            }]);

        if (error) {
            console.error("DEBUG: Database Error Details:", error);
            alert("Database Error: " + error.message);
            return;
        }

        console.log("DEBUG: Success response from database!");
        
        // Clear input and reload
        document.getElementById('commentText').value = '';
        await loadComments(currentPostId); 
        
    } catch (err) {
        console.error("Error submitting comment:", err.message);
    }
}

// Load comments on page load
// loadComments("blog-post-2");
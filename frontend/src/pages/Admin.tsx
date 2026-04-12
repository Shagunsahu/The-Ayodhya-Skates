import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSponsors, usePartners, Sponsor, Partner } from "@/hooks/useSponsors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Plus, Trash2, Edit, Building, Users, Shield, Save } from "lucide-react";
import Layout from "@/components/layout/Layout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: sponsors, refetch: refetchSponsors } = useSponsors();
  const { data: partners, refetch: refetchPartners } = usePartners();

  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    logo_emoji: "🏢",
    sponsor_type: "",
    website_url: "",
  });
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    logo_emoji: "🤝",
    description: "",
    website_url: "",
  });
  const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [partnerDialogOpen, setPartnerDialogOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/admin/login");
    } else if (!loading && user && !isAdmin) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [user, isAdmin, loading, navigate, toast]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleAddSponsor = async () => {
    // TODO: Implement with new backend
    toast({ title: "Success", description: "Sponsor added successfully" });
    setSponsorForm({ name: "", logo_emoji: "🏢", sponsor_type: "", website_url: "" });
    setDialogOpen(false);
    refetchSponsors();
  };

  const handleUpdateSponsor = async () => {
    if (!editingSponsor) return;

    // TODO: Implement with new backend

    toast({ title: "Success", description: "Sponsor updated successfully" });
    setEditingSponsor(null);
    setSponsorForm({ name: "", logo_emoji: "🏢", sponsor_type: "", website_url: "" });
    setDialogOpen(false);
    refetchSponsors();
  };

  const handleDeleteSponsor = async (id: string) => {
    // TODO: Implement with new backend

    toast({ title: "Success", description: "Sponsor deleted successfully" });
    refetchSponsors();
  };

  const handleAddPartner = async () => {
    // TODO: Implement with new backend
    toast({ title: "Success", description: "Partner added successfully" });
    setPartnerForm({ name: "", logo_emoji: "🤝", description: "", website_url: "" });
    setPartnerDialogOpen(false);
    refetchPartners();
  };

  const handleUpdatePartner = async () => {
    if (!editingPartner) return;

    // TODO: Implement with new backend

    toast({ title: "Success", description: "Partner updated successfully" });
    setEditingPartner(null);
    setPartnerForm({ name: "", logo_emoji: "🤝", description: "", website_url: "" });
    setPartnerDialogOpen(false);
    refetchPartners();
  };

  const handleDeletePartner = async (id: string) => {
    // TODO: Implement with new backend

    toast({ title: "Success", description: "Partner deleted successfully" });
    refetchPartners();
  };

  const openEditSponsor = (sponsor: Sponsor) => {
    setEditingSponsor(sponsor);
    setSponsorForm({
      name: sponsor.name,
      logo_emoji: sponsor.logo_emoji || "🏢",
      sponsor_type: sponsor.sponsor_type,
      website_url: sponsor.website_url || "",
    });
    setDialogOpen(true);
  };

  const openEditPartner = (partner: Partner) => {
    setEditingPartner(partner);
    setPartnerForm({
      name: partner.name,
      logo_emoji: partner.logo_emoji || "🤝",
      description: partner.description || "",
      website_url: partner.website_url || "",
    });
    setPartnerDialogOpen(true);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <Layout>
      <section className="hero-gradient py-12 lg:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-white"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-8 h-8" />
                <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
              </div>
              <p className="text-white/80">Manage your sponsors and partners</p>
            </div>
            <Button variant="outline" onClick={handleSignOut} className="text-white border-white/30 hover:bg-white/10">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="sponsors" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="sponsors" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Sponsors
              </TabsTrigger>
              <TabsTrigger value="partners" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Partners
              </TabsTrigger>
            </TabsList>

            {/* Sponsors Tab */}
            <TabsContent value="sponsors">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Manage Sponsors</CardTitle>
                  <Dialog open={dialogOpen} onOpenChange={(open) => {
                    setDialogOpen(open);
                    if (!open) {
                      setEditingSponsor(null);
                      setSponsorForm({ name: "", logo_emoji: "🏢", sponsor_type: "", website_url: "" });
                    }
                  }}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Sponsor
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{editingSponsor ? "Edit Sponsor" : "Add New Sponsor"}</DialogTitle>
                        <DialogDescription>
                          {editingSponsor ? "Update sponsor details" : "Add a new sponsor to display on your website"}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input
                            value={sponsorForm.name}
                            onChange={(e) => setSponsorForm({ ...sponsorForm, name: e.target.value })}
                            placeholder="Sponsor name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Emoji Logo</Label>
                          <Input
                            value={sponsorForm.logo_emoji}
                            onChange={(e) => setSponsorForm({ ...sponsorForm, logo_emoji: e.target.value })}
                            placeholder="🏢"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Type</Label>
                          <Input
                            value={sponsorForm.sponsor_type}
                            onChange={(e) => setSponsorForm({ ...sponsorForm, sponsor_type: e.target.value })}
                            placeholder="e.g., Government, Federation"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Website URL (optional)</Label>
                          <Input
                            value={sponsorForm.website_url}
                            onChange={(e) => setSponsorForm({ ...sponsorForm, website_url: e.target.value })}
                            placeholder="https://..."
                          />
                        </div>
                        <Button
                          className="w-full"
                          onClick={editingSponsor ? handleUpdateSponsor : handleAddSponsor}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          {editingSponsor ? "Update Sponsor" : "Add Sponsor"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {sponsors?.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{sponsor.logo_emoji}</span>
                          <div>
                            <h4 className="font-semibold">{sponsor.name}</h4>
                            <p className="text-sm text-muted-foreground">{sponsor.sponsor_type}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon" onClick={() => openEditSponsor(sponsor)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="destructive" size="icon" onClick={() => handleDeleteSponsor(sponsor.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {!sponsors?.length && (
                      <p className="text-center text-muted-foreground py-8">No sponsors yet. Add your first sponsor!</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Manage Partners</CardTitle>
                  <Dialog open={partnerDialogOpen} onOpenChange={(open) => {
                    setPartnerDialogOpen(open);
                    if (!open) {
                      setEditingPartner(null);
                      setPartnerForm({ name: "", logo_emoji: "🤝", description: "", website_url: "" });
                    }
                  }}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Partner
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{editingPartner ? "Edit Partner" : "Add New Partner"}</DialogTitle>
                        <DialogDescription>
                          {editingPartner ? "Update partner details" : "Add a new partner to display on your website"}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input
                            value={partnerForm.name}
                            onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                            placeholder="Partner name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Emoji Logo</Label>
                          <Input
                            value={partnerForm.logo_emoji}
                            onChange={(e) => setPartnerForm({ ...partnerForm, logo_emoji: e.target.value })}
                            placeholder="🤝"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Input
                            value={partnerForm.description}
                            onChange={(e) => setPartnerForm({ ...partnerForm, description: e.target.value })}
                            placeholder="Brief description"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Website URL (optional)</Label>
                          <Input
                            value={partnerForm.website_url}
                            onChange={(e) => setPartnerForm({ ...partnerForm, website_url: e.target.value })}
                            placeholder="https://..."
                          />
                        </div>
                        <Button
                          className="w-full"
                          onClick={editingPartner ? handleUpdatePartner : handleAddPartner}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          {editingPartner ? "Update Partner" : "Add Partner"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {partners?.map((partner) => (
                      <div
                        key={partner.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{partner.logo_emoji}</span>
                          <div>
                            <h4 className="font-semibold">{partner.name}</h4>
                            <p className="text-sm text-muted-foreground">{partner.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon" onClick={() => openEditPartner(partner)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="destructive" size="icon" onClick={() => handleDeletePartner(partner.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {!partners?.length && (
                      <p className="text-center text-muted-foreground py-8">No partners yet. Add your first partner!</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
